import Head from "next/head";
// import KGSummer from "../../fonts/KGSummer/KGSummerSunshineBlackout";

const titleSuffix = "robin - A wrapper that makes JavaScript easy";
const defaultDescription =
	"robin - A wrapper that makes JavaScript easy"
type MetaType = {
	title: string;
	description: string;
	keywords: string;
	ogImage: string;
};

export default function Meta(props: MetaType) {
	const { title, description, ogImage, keywords } = props;
	return (
		<Head>
			<title>
				{title && title != titleSuffix
					? `${title} | ${titleSuffix}`
					: `${titleSuffix}`}
			</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="icon" href="/favicon.ico" />
			<link rel="manifest" href="/site.webmanifest"></link>
			<meta
				name="description"
				content={description ? description : defaultDescription}
			/>
			<meta name="keywords" content={keywords} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				property="og:title"
				content={
					title && title != titleSuffix
						? `${title} | ${titleSuffix}`
						: `${titleSuffix}`
				}
			/>
			<meta
				property="og:description"
				content={description ? description : defaultDescription}
			/>
			<meta
				property="twitter:title"
				content={
					title && title != titleSuffix
						? `${title} | ${titleSuffix}`
						: `${titleSuffix}`
				}
			/>
		</Head>
	);
}
