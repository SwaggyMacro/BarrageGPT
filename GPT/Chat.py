import logging
import time

import openai

from Utils import Config


class Chat:

    def __init__(self, api_key: str):
        self.api_key = api_key
        openai.api_key = api_key

        if Config().is_api_proxy_on():
            openai.api_base = Config().get_api_proxy_url()

    def chat(self, question: str, role: str = None, stream: bool = False, model: str = 'gpt-3.5-turbo') -> str:
        return stream and self.__chat_stream(question, model, role) or self.__chat_no_stream(question, model, role)

    def __chat_stream(self, question: str, model: str, role: str = None) -> str:
        """
        :param question: what you want to ask for
        :param role: the role of the question, if None, the role will be none.
        """
        start_time = time.time()
        response = openai.ChatCompletion.create(
            model=model,
            messages=role is not None and [
                {"role": "system", "content": role},
                {"role": "user", "content": question}
            ] or [
                         {"role": "user", "content": question}
                     ],
            stream=True
        )
        # create variables to collect the stream of chunks
        collected_chunks = []
        collected_messages = []
        # iterate through the stream of events
        try:
            for chunk in response:
                if chunk['choices'][0]['finish_reason'] == 'stop':
                    break
                chunk_time = time.time() - start_time  # calculate the time delay of the chunk
                collected_chunks.append(chunk)  # save the event response
                chunk_message = chunk['choices'][0]['delta']['content']  # extract the message
                collected_messages.append(chunk_message)  # save the message
                # print(f"Message received {chunk_time:.2f} seconds after request: {chunk_message}")
                # print the delay and text
                yield chunk_message
        except Exception as e:
            logging.error(e)
            logging.error(collected_chunks)
            logging.error(collected_messages)

    def __chat_no_stream(self, question: str, model: str, role: str = None) -> str:
        response = openai.ChatCompletion.create(
            model=model,
            messages=role is not None and [
                {"role": "system", "content": role},
                {"role": "user", "content": question}
            ] or [
                         {"role": "user", "content": question}
                     ],
            stream=False
        )
        return response['choices'][0]['message']['content']
