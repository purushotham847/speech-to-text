

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

   

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div class="bg-black w-full h-screen flex flex-col justify-center items-center">
                <h1 class="text-[50px] text-white font-serif">Speech to Text Converter</h1>
                <br/>
         
                <div className="bg-white text-blue-500 text-2xl font-mono p-3 w-[70%] h-[70%] " onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className=" grid grid-rows-1 gap-3 grid-cols-3 mt-5">

                    <button class="bg-blue-500 border-black rounded-md p-2 text-white" onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button class="bg-blue-500 border-black rounded-md p-2 text-white" onClick={startListening}>Start Listening</button>
                    <button class="bg-blue-500 border-black rounded-md p-2 text-white" onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;