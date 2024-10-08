import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import TypingEffect from '../components/TypingEffect';
import { Link } from 'react-router-dom';

interface ChatMessage {
  sender: 'user' | 'ai';
  message: string;
}

const Generate: React.FC = () => {
  const [prompts] = useState<string[]>([
    'How honeybee makes honey?',
    'Explain the theory of gravity.',
    'Biochemistry in a nutshell.',
  ]);
  const [userPrompt, setUserPrompt] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSitcom, setSelectedSitcom] = useState<string>('None');
  const [isStories, setIsStories] = useState<boolean>(true);

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPrompt(e.target.value);
  };

  const handleSitcomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSitcom(e.target.value);
  };

  const fetchAIResponse = async (prompt: string): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch("https://falcon-hackathon-edutales.onrender.com/api/v1/generate-story/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: prompt }),
      });
      const data = await response.json();
      console.log(data);
      return data.data.story;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, an error occurred while fetching the response. Please try again later.';
    } finally {
      setLoading(false);
    }
  };

  const fetchSitcomAIResponse = async (prompt: string, sitcom: string): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch("https://falcon-hackathon-edutales.onrender.com/api/v1/sitcom-explain/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: prompt, sitcom: sitcom }),
      });
      const data = await response.json();
      console.log(data);
      return data.data.story;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, an error occurred while fetching the response. Please try again later.';
    } finally {
      setLoading(false);
    }
  };

  const handlePromptSubmit = async (prompt: string) => {
    if (prompt.trim()) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', message: prompt },
      ]);

      const aiMessage = isStories
        ? await fetchAIResponse(prompt)
        : await fetchSitcomAIResponse(prompt, selectedSitcom);

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', message: aiMessage },
      ]);
      setUserPrompt('');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePromptSubmit(userPrompt);
  };

  const handleSamplePromptClick = (prompt: string) => {
    handlePromptSubmit(prompt);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-64 flex flex-col justify-start bg-black text-secondaryColor border-secondaryColor border-2 rounded-lg p-4 relative">
          <div className="flex flex-row justify-between">
            <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={toggleSidebar} />
            <Link to="/" className="bg-primaryColor rounded-full text-xs border-2  border-secondaryColor px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          Home
        </Link>
            <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
          </div>
          <div className="relative inline-block w-full h-10 my-4">
            <div
              className={`absolute top-0 bottom-0 w-[50%] bg-secondaryColor transition-transform rounded-full duration-300 ${
                isStories ? "transform translate-x-0" : "transform translate-x-full"
              }`}
            />
            <div className="absolute inset-0 border-2 border-secondaryColor rounded-full flex items-center justify-between px-2">
              <button
                onClick={() => setIsStories(true)}
                className={`w-1/2 text-center py-2 pr-2 rounded-l-full ${
                  isStories ? "text-primaryColor" : "text-secondaryColor"
                }`}
              >
                Stories
              </button>
              <button
                onClick={() => setIsStories(false)}
                className={`w-1/2 text-center py-2 pl-2 rounded-r-full ${
                  isStories ? "text-secondaryColor" : "text-primaryColor"
                }`}
              >
                Sitcoms
              </button>
            </div>
          </div>
          {!isStories && (
            <select
              value={selectedSitcom}
              onChange={handleSitcomChange}
              className="bg-black text-secondaryColor border-2 border-secondaryColor rounded-lg p-2 my-4"
            >
              <option value="None">Select Sitcom</option>
              <option value="The Big Bang Theory">The Big Bang Theory</option>
              <option value="Friends">Friends</option>
              <option value="How I Met Your Mother">How I Met Your Mother</option>
              <option value="The Office">The Office</option>
            </select>
          )}
          <h2 className="text-xl font-bold text-secondaryColor py-2">Recent</h2>
          <p className="text-m text-secondaryColor py-1">Topic name</p>
          <p className="text-m text-secondaryColor py-1">Topic name</p>
          <p className="text-m text-secondaryColor py-1">Topic name</p>
          <p className="text-m text-secondaryColor py-1">Topic name</p>
          <p className="text-m text-secondaryColor py-1">Topic name</p>
        </div>
      )}
      {!sidebarOpen && (
        <div className="flex flex-col justify-start bg-primaryColor text-secondaryColor p-4">
          <FontAwesomeIcon icon={faPlus} className="mx-4 pt-4 cursor-pointer" onClick={toggleSidebar} />
        </div>
      )}
      {/* Main content */}
      <div className={`flex-1 bg-primaryColor flex flex-col`}>
        <div className="flex-1 overflow-auto p-4">
          {chatMessages.length === 0 ? (
            /* Heading and Sample prompts section */
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center mb-4">
                <h2 className="text-5xl font-bold text-secondaryColor">Story Wise, helps you learn</h2>
              </div>
              <div className="mb-4">
                <div className="grid grid-cols-3 gap-10 p-12">
                  {prompts.map((prompt, index) => (
                    <div
                      key={index}
                      className="border-2 text-xl border-secondaryColor bg-black text-secondaryColor p-4 py-10 rounded-lg cursor-pointer hover:bg-secondary-dark text-center"
                      onClick={() => handleSamplePromptClick(prompt)}
                    >
                      {prompt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Chat messages section */
            <div className="flex flex-col px-48 space-y-4">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${message.sender === 'user' ? 'bg-black max-w-[70%] text-secondaryColor self-end' : 'text-secondaryColor self-start'}`}
                >
                  {message.sender === 'ai' ? (
                    <TypingEffect message={message.message} />
                  ) : (
                    <p className="whitespace-pre-line">{message.message}</p>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex items-center py-2">
                  <div className="flex space-x-1">
                    <div className="dot w-2 h-2 bg-secondaryColor rounded-full animate-wave"></div>
                    <div className="dot w-2 h-2 bg-secondaryColor rounded-full animate-wave animation-delay-200"></div>
                    <div className="dot w-2 h-2 bg-secondaryColor rounded-full animate-wave animation-delay-400"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Text input section to enter user prompt */}
        <div className="p-4 flex flex-col bg-primaryColor">
          <form onSubmit={handleFormSubmit} className="flex items-center">
            <input
              type="text"
              value={userPrompt}
              onChange={handlePromptChange}
              className="flex-1 p-2 px-4 border-2 bg-black border-secondaryColor text-secondaryColor rounded-full"
              placeholder="Type your topic here..."
            />
            <button type="submit" className="ml-2 bg-secondaryColor text-primaryColor p-2 px-3 rounded-full">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
          <span className="self-center mt-2 text-sm font-sans text-secondaryColor opacity-50">This is a demo site so results may vary and take time</span>
        </div>
      </div>
    </div>
  );
};

export default Generate;
