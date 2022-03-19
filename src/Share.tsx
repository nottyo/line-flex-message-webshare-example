import liff from "@line/liff";
import './Share.css';
import { useEffect } from "react";

async function handleShareClick() {
  const imgResp = await fetch('https://images.pexels.com/photos/4390589/pexels-photo-4390589.jpeg?auto=compress');
  const blob = await imgResp.blob();
  const filesArray = [
    new File([blob], 'images.png', { type: 'image/png', lastModified: new Date().getTime() })
  ];
  const data = {
    files: filesArray,
  }
  try {
    await navigator.share(data);
    liff.closeWindow();
  } catch (error) {
    console.log('share error or cancel share');
    liff.closeWindow();
  }
}

export default function Share() {
  useEffect(() => {
    document.getElementById('share')?.click();
  })
  if (!navigator.canShare) {
    return (
      <h3>Sorry, your browser does not support this feature!</h3>
    )
  } else {
    return (
      <div>
        <h3>ระบบกำลังแชร์ Content ของคุณ...</h3>
        <button className='share-button' id="share" onClick={() => handleShareClick()}>Share</button>
      </div>
    )
  }
}