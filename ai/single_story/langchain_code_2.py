from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

AI71_BASE_URL = "https://api.ai71.ai/v1/"

# Initialize ChatOpenAI with additional parameters
chat = ChatOpenAI(
    model="tiiuae/falcon-180B-chat",
    api_key=AI71_API_KEY,
    base_url=AI71_BASE_URL,
    streaming=True,
    temperature=0.7,  
    # max_tokens=1024, 
    # top_p=0.9,       
    # frequency_penalty=0.5,  
    # presence_penalty=0.6   
)

# Simple invocation with parameters
# response = chat.invoke(
#     [
#         SystemMessage(content="ou are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."),
#         HumanMessage(content="""
#                      Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.

# Ultraviolet (UV) light is electromagnetic radiation of wavelengths of 10–400 nanometers, shorter than that of visible light, but longer than X-rays. UV radiation is present in sunlight and constitutes about 10% of the total electromagnetic radiation output from the Sun. It is also produced by electric arcs, Cherenkov radiation, and specialized lights, such as mercury-vapor lamps, tanning lamps, and black lights. The photons of ultraviolet have greater energy than those of visible light, from about 3.1 to 12 electron volts, around the minimum energy required to ionize atoms. Although long-wavelength ultraviolet is not considered ionizing radiation because its photons lack sufficient energy, it can induce chemical reactions and cause many substances to glow or fluoresce. Many practical applications, including chemical and biological effects, are derived from the way that UV radiation can interact with organic molecules. These interactions can involve absorption or adjusting energy states in molecules, but do not necessarily involve heating. Short-wave ultraviolet light is ionizing radiation. Consequently, short-wave UV damages DNA and sterilizes surfaces with which it comes into contact.
#                      """),
#     ]
# )
# print(response)

# Streaming invocation with parameters
# for chunk in chat.stream(
#     """
#     Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.

#     Ultraviolet (UV) light is electromagnetic radiation of wavelengths of 10–400 nanometers, shorter than that of visible light, but longer than X-rays. UV radiation is present in sunlight and constitutes about 10% of the total electromagnetic radiation output from the Sun. It is also produced by electric arcs, Cherenkov radiation, and specialized lights, such as mercury-vapor lamps, tanning lamps, and black lights. The photons of ultraviolet have greater energy than those of visible light, from about 3.1 to 12 electron volts, around the minimum energy required to ionize atoms. Although long-wavelength ultraviolet is not considered ionizing radiation because its photons lack sufficient energy, it can induce chemical reactions and cause many substances to glow or fluoresce. Many practical applications, including chemical and biological effects, are derived from the way that UV radiation can interact with organic molecules. These interactions can involve absorption or adjusting energy states in molecules, but do not necessarily involve heating. Short-wave ultraviolet light is ionizing radiation. Consequently, short-wave UV damages DNA and sterilizes surfaces with which it comes into contact.

#     Please create a story where two children, Leo and Mia, visit their Uncle Max's lab and learn about UV light through a series of explanations and experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.
#     """
# ):
#     print(chunk.content, end="", flush=True)



content = input("Enter the content: ")

prompt = f"""
You are an expert in teaching scientific concepts. Your task is to generate a scientific fictional story that explains the given content.

Given Content:
{content}

Make sure the story generated followes the below guidelines:
1. The story should have some characters that are human.
2. The characters have dialogue between them.
3. The story must be family-friendly.
4. Use simple, everyday words for better understanding.
5. Don't use cliches or stereotypes.
6. Explain the scientific concepts in a way that is easy to understand.
7. The story should be engaging and informative.
8. Avoid using phrases like "Once upon a time" or "In a land far away".
9. The story should be based on the given content.
10. The story should explain the entirety of the given content.
11. The size of the story does not matter, but it should explain all of the given content.
12. In case where the content is not understandable, respond with "No" in the "understandable" field and leave the "story" field blank.
13. When input has no clear scientific content, respond with "No" in the "understandable" field and leave the "story" field blank.

Respond with a story that meets the above guidelines. The response should strictly be of the following format:
[
    "understandable": "Yes/No",
    "story": "Your generated story here"
]
Your response must not contain any other text.
"""

prompt_2 = f"""
You are an expert in teaching scientific concepts. 

Your task is as follows:
1. Analyze the given content.
2. Find the scientific concepts in the content.
3. Generate a scientific fictional story that explains the given content.
4. Ensure that the story follows the guidelines provided.
5. Ensure output is in the specified format.

Given Content:
{content}

The analysis should be based on the following guidelines:
1. Ensure that the given data is comprehensible.
2. Ensure that the given data is complete and accurate.
3. If the given data is not understandable, respond with "No" in the "understandable" field and leave the "story" field blank.
4. If the given data has no clear scientific content, respond with "No" in the "understandable" field and leave the "story" field blank.

Make sure the story generated followes the below guidelines:
1. The story should have at least two characters that are human.
2. The characters must have dialogue between them.
3. The story must be family-friendly.
4. Use simple, everyday words for better understanding.
5. Don't use cliches or stereotypes.
6. Explain the scientific concepts in a way that is easy to understand.
7. The story should be engaging and informative.
8. Avoid using phrases like "Once upon a time" or "In a land far away".
9. The story should be based on the given content.
10. The story should explain the entirety of the given content.
11. The size of the story does not matter, but it should explain all of the given content.

Format your final response strictly as follows:
[
    "understandable": "Yes/No",
    "story": "Your generated story here"
]

Your response must not contain any other text.
"""

for chunk in chat.stream(prompt):
    print(chunk.content, end="", flush=True)