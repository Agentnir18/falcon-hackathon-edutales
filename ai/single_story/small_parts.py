from langchain_community.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

AI71_BASE_URL = "https://api.ai71.ai/v1/"

def analyze_content_langchain(content):
    chat = ChatOpenAI(
        model="tiiuae/falcon-180B-chat",
        api_key=AI71_API_KEY,
        base_url=AI71_BASE_URL,
        streaming=True,
    )

    prompt = f"""
You are an expert analyzer. Given the content below, analyze it and provide a list of key points. \n
The content may contain scientific concepts, technical information, or general knowledge. \n

Content:
{content}

1. Give me answer based on current content only.\n
2. Forget all the past answers and conversations.\n
3. The explanation should be comprehensive and informative.\n 
4. The key points should be clear and well-structured.\n
5. The key points should cover all the content provided.\n
6. Do not miss any details in the content.\n
7. If the content is incomprehensible, say so in the response.\n

Your response should strictly follow the format below:\n
[
    Understandable: "Yes/No",
    Key Points: ["Point 1", "Point 2", ...],
]

1. The "Understandable" field should indicate whether the content is understandable or not.\n
2. If the content is not understandable, return "No" for the "Understandable" field and leave the "Key Points" fields empty.\n
3. If the content is random letters or gibberish, return "No" for the "Understandable" field and leave the "Key Points" fields empty.\n
4. If the content is understandable, provide the list of key points.\n
5. The "Key Points" field should list all the concepts in the content.\n

Do not include any additional description in your response. Only provide the required fields in the specified format.\n   
Respond strictly in JSON format without any additional description or any markdown formatting.\n
"""

    for chunk in chat.stream(prompt):
        print(chunk.content, end="", flush=True)


def generate_plot_langchain():
    chat = ChatOpenAI(
        model="tiiuae/falcon-180B-chat",
        api_key=AI71_API_KEY,
        base_url=AI71_BASE_URL,
        streaming=True,
    )

    prompt = f"""
You are a creative writer. Your task is to generate the plot for a fictional story.\n
You can use any genre, setting, or characters for the plot.\n
The story is meant to be used for educational purposes to explain concepts.\n

1. Only generate the plot for a story.\n
2. The characters of the plot should be specified.\n
3. The characters must be human.\n
4. The plot must be family-friendly.\n
5. Don't use cliches or stereotypes.\n
6. The plots must be useful for generating stories that can be used for explaining concepts.\n

Your response should strictly follow the format below:\n
[
    "plot": "Your generated plot here"
    "characters": ["Character 1", "Character 2", ...]
]

Do not include any additional description in your response. Only provide the required fields in the specified format.\n
Respond strictly in JSON format without any additional description or any markdown formatting.\n
    """

    response = ""
    for chunk in chat.stream(prompt):
        print(chunk.content, end="", flush=True)
        response += chunk.content

    response_dict = eval(response)

def generate_story_langchain(key_points, plot):
    chat = ChatOpenAI(
        model="tiiuae/falcon-180B-chat",
        api_key=AI71_API_KEY,
        base_url=AI71_BASE_URL,
        streaming=True,
        temperature=1
    )

    prompt = f"""
You are an expert in teaching scientific concepts. \n 
You teach scientific concepts through stories.\n
Your task is to generate a scientific fictional story that explains the key points. \n
The story must not contain terms like "Once upon a time" or "In a land far away".\n

Key Points:
{key_points}

The story must absolutely not contain terms like "Once upon a time" or "In a land far away".\n

1. The story should have at least two characters that are human.\n
2. The characters must have dialogue between them.\n
3. Use simple, everyday words for better understanding.\n
4. The story should explain all the key points.\n

The response should not contain any terms like "Once upon a time" or "In a land far away".\n
Your response should strictly follow the format below:\n
[
    "story": "Your generated story here"
]

Do not include any additional description in your response. Only provide the required fields in the specified format.\n
Respond strictly in JSON format without any additional description or any markdown formatting.\n
"""

    response = ""
    for chunk in chat.stream(prompt):
        print(chunk.content, end="", flush=True)
        # response += chunk.content

    # response_dict = eval(response)

    # return response_dict


# content = input("Enter the content: ")
# analyze_content_langchain(content)

generate_plot_langchain()

# key_points = """Key Points: [
#     "Ultraviolet (UV) light is electromagnetic radiation with wavelengths of 10-400 nanometers",
#     "UV radiation is present in sunlight and constitutes about 10% of total electromagnetic radiation output from the Sun",
#     "UV radiation is also produced by electric arcs, Cherenkov radiation, and specialized lights such as mercury-vapor lamps, tanning lamps, and black lights",
#     "UV radiation photons have greater energy than those of visible light, from about 3.1 to 12 electron volts",
#     "Long-wavelength UV is not considered ionizing radiation",
#     "Short-wave ultraviolet light is ionizing radiation",
#     "Short-wave UV damages DNA and sterilizes surfaces with which it comes into contact"
#   ]"""

# plot = """
#  [
#     "plot": "In a small town, two unlikely friends, a shy bookworm named Lily and an adventurous tomboy named Rosie, discover a hidden magical library that transports them to different worlds within the pages of books. Together, they embark on exciting adventures in various genres, from solving mysteries in Victorian England to battling dragons in medieval fantasy lands.",
#     "characters": ["Lily", "Rosie"]
# ]
# """

# generate_story_langchain(key_points, plot)