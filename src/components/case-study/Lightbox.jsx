import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../Icons";

/**
 * Full-screen image viewer. Pass the image to show as `image`
 * ({ src, alt }) and it opens; `onClose` is called when it closes.
 * "Fit to screen" / "Actual size" lets people read small detail.
 */
export default function Lightbox({ image, onClose }) {
  const dialogRef = useRef(null);
  const stageRef = useRef(null);
  const [fit, setFit] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (image) {
      setFit(true);
      stageRef.current?.scrollTo(0, 0);
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [image]);

  // Clicking the dark area around the image closes it.
  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current || e.target === stageRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`lightbox${fit ? "" : " is-actual"}`}
      aria-label="Full image"
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <div className="lightbox__bar">
        <button type="button" className="lightbox__btn" aria-pressed={fit} onClick={() => setFit((f) => !f)}>
          {fit ? "Fit to screen" : "Actual size"}
        </button>
        <button type="button" className="lightbox__btn" aria-label="Close full image" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="lightbox__stage" ref={stageRef}>
        {image && <img src={image.src} alt={image.alt} />}
      </div>
    </dialog>
  );
}
