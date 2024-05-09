import React, { useState } from 'react';
import { useUrlFetchingMutation } from '../slices/urlSlice';
import { ToastContainer, toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css'; 
import './page.css'

function Home() {
  const [fetch, { isLoading }] = useUrlFetchingMutation();
  const [originalUrl, setOriginalUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [copied, setCopied] = useState(false);

  async function handleSubmit() {

    const trimmedUrl = originalUrl.trim();

    if (trimmedUrl === '') {
      toast.error('URL cannot be empty');
      return;
    }

    try {
      const result = await fetch({ url: originalUrl });

      if (result.data) {
        setNewUrl(`http://localhost:5173/${result.data.id}`);
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  }

  const handleCopy = () => {
    setCopied(true);
    toast.success("Copied successfully")
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section className="flex  justify-center items-center h-screen bg-gray-200">
      <div className="container">
        <h1 className="heading">Shorten Your URL</h1>

        <div className="input-container">
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter your URL here"
            className="input"
          />
          <button onClick={handleSubmit} className="btn">
            Shorten
          </button>
        </div>

        <div className="input-container">
          <input
            type="text"
            value={newUrl}
            readOnly
            className="input"
          />
          <CopyToClipboard text={newUrl} onCopy={handleCopy}>
            <button className="btn">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={true} />
    </section>
  );
}

export default Home;
