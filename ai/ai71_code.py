from ai71 import AI71
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

# Initialize the AI71 client
client = AI71(AI71_API_KEY)

# Define the prompt
prompt = """
Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family friendly and use simple daily words for better understanding.

Ultraviolet (UV) light is electromagnetic radiation of wavelengths of 10–400 nanometers, shorter than that of visible light, but longer than X-rays. UV radiation is present in sunlight, and constitutes about 10% of the total electromagnetic radiation output from the Sun. It is also produced by electric arcs, Cherenkov radiation, and specialized lights, such as mercury-vapor lamps, tanning lamps, and black lights. The photons of ultraviolet have greater energy than those of visible light, from about 3.1 to 12 electron volts, around the minimum energy required to ionize atoms. Although long-wavelength ultraviolet is not considered an ionizing radiation because its photons lack sufficient energy, it can induce chemical reactions and cause many substances to glow or fluoresce. Many practical applications, including chemical and biological effects, are derived from the way that UV radiation can interact with organic molecules. These interactions can involve absorption or adjusting energy states in molecules, but do not necessarily involve heating. Short-wave ultraviolet light is ionizing radiation. Consequently, short-wave UV damages DNA and sterilizes surfaces with which it comes into contact.
"""

# Define the messages for the conversation
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": prompt},
]

# Generate the story
response = client.chat.completions.create(
    model="tiiuae/falcon-180B-chat",
    messages=messages
)

# Print the generated story
print(response)
