import { LinkPreview } from "@/components/ui/link-preview"; // adjust path

type TechLogoProps = {
    url: string;
    src: string;
    alt: string;
    size?: { sm?: string; md?: string; lg?: string }; // optional responsive sizes
};

export const TechLogo = ({
    url,
    src,
    alt,
}: TechLogoProps) => {
    return (
        <LinkPreview key={alt} url={url} className="rounded-full">
            <div
                className={`flex items-center justify-center rounded-full bg-white/5 w-[12vw] aspect-square min-w-[48px] max-w-[96px] transition-all duration-300 ease-in-out
                    hover:scale-105 hover:bg-white/30`}
            >
                <img src={src} alt={alt} className="w-4/5 h-4/5 object-contain" />
            </div>
        </LinkPreview>
    );
};