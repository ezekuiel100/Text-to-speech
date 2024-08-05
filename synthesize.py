# synthesize.py
import sys
from TTS.api import TTS

def synthesize(text, output_path):
    tts = TTS(model_name="tts_models/en/ljspeech/tacotron2-DDC", progress_bar=True, gpu=False)
    tts.tts_to_file(text=text, file_path=output_path)

if __name__ == "__main__":
    text = sys.argv[1]
    output_path = sys.argv[2]
    synthesize(text, output_path)
