from ai71 import AI71
from decouple import config
import random
from .plots import Plot

AI71_API_KEY = config("AI71_API_KEY")

def generate_story(content):
    """
    Function to generate a story to explain the given content.

    Args:
    content (str): The scientific content to be explained in the story.

    Returns:
    str: The generated story explaining the scientific content.
    """
    client = AI71(AI71_API_KEY)

    messages = [{"role": "system", "content": "You are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."}]

    plot = Plot().get_plot()

    content_format =f"""
    Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.
    Don't use cliches or stereotypes. The story should be original and creative.

    {content}

    {plot}

    Critical: The story must not begin with phrases like "Once upon a time" or "In a land far away".
    """ 
    messages.append({
        "role": "user", 
        "content": content_format
        })
    # print(f"Falcon:", sep="", end="", flush=True)

    story = ""

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            story += delta_content

    return story

def sitcom_explain(content, sitcom):
    """
    Function to generate a sitcom-style story to explain the given content.

    Args:
    content (str): The scientific content to be explained in the story.
    sitcom (str): The name of the sitcom to be used as the setting for the story.

    Returns:
    str: The generated sitcom-style story explaining the scientific content.
    """
    client = AI71(AI71_API_KEY)

    messages = [{"role": "system", "content": "You are an educational storyteller who uses sitcom scenarios to explain scientific concepts in an engaging and entertaining way. You must create a sitcom-style story that incorporates the given content and the sitcom scenario provided by the user."}]

    content_format =f"""
    Generate a sitcom-style story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.

    {content}

    Please create a story where the characters from '{sitcom}' encounter the given content in their daily lives. The story should be set in the familiar locations of the show, with the characters engaging in their usual activities and interactions. The scientific concepts should be explained through the characters' conversations and experiences, maintaining the humor and dynamics of the sitcom.
    """ 
    messages.append({
        "role": "user", 
        "content": content_format
        })
    # print(f"Falcon:", sep="", end="", flush=True)

    story = ""

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            story += delta_content

    return story