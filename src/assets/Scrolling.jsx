import React,{useState} from 'react'

function Scrolling() {
    const[scroll,setScroll]=useState(false);
    
    const handleClick = () => {
    if (scroll) {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setScroll(!scroll);
};

  return (
    <div>
        <button onClick={handleClick}
         style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        padding: '12px 16px',
        fontSize: '24px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#333',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
        {scroll ? "v":"^"}
        </button>
    </div>
  );
};

export default Scrolling;