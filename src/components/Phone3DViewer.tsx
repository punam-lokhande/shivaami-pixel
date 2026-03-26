import { useEffect, useRef } from "react";
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "camera-controls"?: boolean | string;
          "auto-rotate"?: boolean | string;
          "auto-rotate-delay"?: string;
          "rotation-per-second"?: string;
          "disable-tap"?: boolean | string;
          "disable-pan"?: boolean | string;
          "disable-zoom"?: boolean | string;
          "interaction-prompt"?: string;
          "camera-orbit"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "field-of-view"?: string;
          "tone-mapping"?: string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          "exposure"?: string;
          "interpolation-decay"?: string;
          "environment-image"?: string;
          loading?: string;
          poster?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface Phone3DViewerProps {
  modelSrc: string;
  alt?: string;
  className?: string;
  poster?: string;
}

const Phone3DViewer = ({ modelSrc, alt = "3D Phone", className = "", poster }: Phone3DViewerProps) => {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure model-viewer is loaded
    if (viewerRef.current) {
      viewerRef.current.setAttribute("src", modelSrc);
    }
  }, [modelSrc]);

  return (
    <div className={`w-full h-full ${className}`}>
      <model-viewer
        ref={viewerRef}
        src={modelSrc}
        alt={alt}
        camera-controls=""
        auto-rotate=""
        auto-rotate-delay="0"
        rotation-per-second="30deg"
        disable-tap=""
        disable-pan=""
        disable-zoom=""
        interaction-prompt="auto"
        camera-orbit="0deg 75deg 105%"
        min-camera-orbit="auto auto 80%"
        max-camera-orbit="auto auto 150%"
        tone-mapping="neutral"
        shadow-intensity="1"
        shadow-softness="0.8"
        exposure="1"
        interpolation-decay="125"
        loading="eager"
        poster={poster}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          // @ts-ignore
          "--poster-color": "transparent",
        }}
      />
    </div>
  );
};

export default Phone3DViewer;
