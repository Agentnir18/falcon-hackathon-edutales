from ai71 import AI71
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

# Initialize the AI71 client
client = AI71(AI71_API_KEY)

def generate_story_from_input():

    messages = [{"role": "system", "content": "You are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."}]


    content = input(f"User:")
    content_format =f"""
    Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.
    Don't use cliches or stereotypes. The story should be original and creative.

    {content}

    Please create a story where two children, Leo and Mia, visit their Uncle Max's lab and learn about the above given content through a series of explanations and experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.
    """ 
    messages.append({
        "role": "user", 
        "content": content_format
        })
    print(f"Falcon:", sep="", end="", flush=True)

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            print(delta_content, sep="", end="", flush=True)

    print("\n")

def generate_story_from_input_using_prompt_with_restrictions():
    messages = [{"role": "system", "content": "You are an expert in teaching scientific concepts. Your task is to generate a scientific fictional story that explains the given content."}]


    content = input(f"User:")
    content_format =f"""
Generate a scientific fictional story that explains the given content.

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
    messages.append({
        "role": "user", 
        "content": content_format
        })
    print(f"Falcon:", sep="", end="", flush=True)

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            print(delta_content, sep="", end="", flush=True)

    print("\n")

generate_story_from_input()