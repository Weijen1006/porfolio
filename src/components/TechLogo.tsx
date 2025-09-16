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
    size = { sm: "w-16 h-16", md: "w-20 h-20", lg: "w-24 h-24" },
}: TechLogoProps) => {
    return (
        <LinkPreview key={alt} url={url}>
            <div
                className={`flex items-center justify-center rounded-full bg-white/5 w-12 h-12 ${size.sm} ${size.md} ${size.lg}`}
            >
                <img src={src} alt={alt} className="w-4/5 h-4/5 object-contain" />
            </div>
        </LinkPreview>
    );
};