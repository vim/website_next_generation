// const cmsContentType = 'announcements';
// fetch(`${process.env.CMS_API}/${cmsContentType}`, {
//     headers: {
//         authorization: `Bearer ${process.env.CMS_TOKEN}`,
//     },
// })
//     .then((ok) => ok.json())
//     .then((res) => console.log(res));

export default function Home() {
	return (
		<main>
			<h1 className="h1">Vim Landing Page</h1>
			<h1 className="h1-prefix">Vim Landing Page</h1>
			<h2 className="h2">Vim Landing Page</h2>
			<h2 className="h2-prefix">Vim Landing Page</h2>
			<p className="paragraph">
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
				Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
				Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
				officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur
				duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Lorem ipsum dolor sit amet, officia
				excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
				Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit
				irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing
				id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint
				cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
			</p>
			<a className="link" href="#">
				asdf
			</a>
			<br></br>
			<ul className="list">
				<li>
					<span>test</span>
				</li>
				<li>
					<span>test</span>
				</li>
				<li>
					<span>test</span>
				</li>
			</ul>
			<button className="btn-primary">test</button>
		</main>
	);
}
