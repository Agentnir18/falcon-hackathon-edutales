from ai71 import AI71
from decouple import config
import random
from .plots import story_plots

AI71_API_KEY = config("AI71_API_KEY")

def generate_story(content):
    
    client = AI71(AI71_API_KEY)

    messages = [{"role": "system", "content": "You are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."}]

    plot = random.choice(story_plots)

    content_format =f"""
    Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.
    Don't use cliches or stereotypes. The story should be original and creative.

    {content}

    {plot}

    The story must not begin with phrases like "Once upon a time" or "In a land far away".
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