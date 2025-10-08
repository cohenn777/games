import { useState, useRef } from 'react';
import './App.css';

const auditions = [
	{
		title: 'אודישן לפסטיגל 2025 לילדי פסטיגל',
		description: 'הגשת מועמדות עד 15.10.2025. דרישות: שירה, ריקוד, הופעה בימתית, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרה "שקשוקה"',
		description: 'הגשת מועמדות עד 15.11.2026. דרישות: משחק, שירה, גיל 8-12.',
	},
	{
		title: 'אודישן לפסטיגל 2026',
		description: 'הגשת מועמדות עד 20.10.2026. דרישות: שירה, ריקוד, הופעה בימתית, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרה "אחין שלי בנץ"',
		description: 'הגשת מועמדות עד 30.11.2026. דרישות: משחק, הופעה קומית, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרות בכאן חינוכית',
		description: 'הגשת מועמדות פתוחה. דרישות: משחק, הופעה בימתית, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרה "הכיתה המגניבה"',
		description: 'הגשת מועמדות עד 10.6.2026. דרישות: משחק, שירה, גיל 8-12.',
	},
	{
		title: 'אודישן למחזמר "הכוכב הקטן"',
		description: 'הגשת מועמדות עד 10.1.2026. דרישות: שירה, ריקוד, גיל 8-12.',
	},
	{
		title: 'אודישן לסרט "החברים החדשים"',
		description: 'הגשת מועמדות עד 5.2.2026. דרישות: משחק, גיל 8-12.',
	},
	{
		title: 'אודישן לתוכנית "הכישרון הצעיר"',
		description: 'הגשת מועמדות עד 28.2.2026. דרישות: הופעה בימתית, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרה "המשפחה שלי"',
		description: 'הגשת מועמדות עד 15.3.2026. דרישות: משחק, גיל 8-12.',
	},
	{
		title: 'אודישן לסרט "ההרפתקה הגדולה"',
		description: 'הגשת מועמדות עד 1.4.2026. דרישות: משחק והרפתקנות, גיל 8-12.',
	},
	{
		title: 'אודישן למופע "הקסם שבך"',
		description: 'הגשת מועמדות עד 20.4.2026. דרישות: שירה, גיל 8-12.',
	},
	{
		title: 'אודישן לסדרה "החברים מהכיתה"',
		description: 'הגשת מועמדות עד 30.4.2026. דרישות: משחק, גיל 8-12.',
	},
	{
		title: 'אודישן לסרט "הסוד של אורי"',
		description: 'הגשת מועמדות עד 10.5.2026. דרישות: משחק דרמטי, גיל 8-12.',
	},
	{
		title: 'אודישן לתוכנית "הכוכב הבא לילדים"',
		description: 'הגשת מועמדות עד 25.5.2026. דרישות: הופעה בימתית, גיל 8-12.',
	},
];

const vipPackages = [
	{
		name: 'אודישנים למצליחים',
		price: '₪59 לחודש',
		benefits: [
			'גישה לאודישנים יוקרתיים',
			'ליווי אישי ממנטור',
			'הזדמנות להשתתף בפרויקטים מובילים',
		],
		color: '#e6e6ff',
	},
	{
		name: 'חבילת VIP בסיסי',
		price: '₪19 לחודש',
		benefits: [
			'גישה לאודישנים בארץ',
			'גישה לסדרות מחו"ל',
			'הטבות בלעדיות למנויים',
		],
		color: '#fffbe6',
	},
	{
		name: 'חבילת VIP פלוס',
		price: '₪39 לחודש',
		benefits: [
			'כל ההטבות של VIP בסיסי',
			'הזדמנות להשתתף בפרויקטים בינלאומיים',
			'תמיכה אישית והכוונה מקצועית',
		],
		color: '#eaffea',
	},
];

function App() {
	const [selected, setSelected] = useState(null);
	const [country, setCountry] = useState('ישראל');
	const [lang, setLang] = useState('he');

	const scrollRef = useRef();
	const scrollLeft = () => {
		if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
	};
	const scrollRight = () => {
		if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
	};
	return (
		<div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: 30 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
				<div>
					<label style={{ marginLeft: 8 }}>{lang === 'en' ? 'Language:' : 'שפה:'}</label>
					<select
						value={lang}
						onChange={e => setLang(e.target.value)}
						style={{ padding: 6, fontSize: 16, borderRadius: 6, border: '1px solid #ccc', marginRight: 12 }}
					>
						<option value="he">עברית</option>
						<option value="en">English</option>
					</select>
				</div>
				<div>
					<label style={{ marginLeft: 8 }}>{lang === 'en' ? 'Country:' : 'מדינה:'}</label>
					<select
						value={country}
						onChange={e => {
							setCountry(e.target.value);
							if (e.target.value === 'אנגליה') setLang('en');
						}}
						style={{ padding: 6, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}
					>
						<option value="ישראל">ישראל</option>
						<option value="אנגליה">אנגליה</option>
						<option value="usa">ארה"ב</option>
						<option value="צרפת">צרפת</option>
					</select>
				</div>
			</div>
			<h1>משחק אודישנים</h1>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
				<button onClick={scrollLeft} style={{ fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', marginRight: 8 }}>&#8592;</button>
				<div ref={scrollRef} style={{ display: 'flex', gap: 20, flexWrap: 'nowrap', overflowX: 'auto', scrollBehavior: 'smooth', width: 700 }}>
					{vipPackages.map((pkg, i) => (
						<div
							key={pkg.name}
							style={{
								background: pkg.color,
								border: '2px solid #ffd700',
								borderRadius: 16,
								padding: 36,
								minWidth: 320,
								transition: 'transform 0.2s, box-shadow 0.2s',
								boxShadow: '0 4px 16px #ccc',
								cursor: 'pointer',
							}}
							onMouseEnter={e => {
								e.currentTarget.style.transform = 'scale(1.08)';
								e.currentTarget.style.boxShadow = '0 4px 16px #ffd700';
							}}
							onMouseLeave={e => {
								e.currentTarget.style.transform = 'scale(1)';
								e.currentTarget.style.boxShadow = '0 4px 16px #ccc';
							}}
						>
							<h2 style={{ fontSize: 28 }}>{pkg.name}</h2>
							<ul style={{ fontSize: 22, textAlign: 'right' }}>
								{pkg.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
							</ul>
							<div style={{ fontWeight: 'bold', margin: '18px 0', fontSize: 20 }}>{pkg.price}</div>
							<button style={{ marginTop: 16, padding: '12px 28px', fontSize: 20, background: '#ffd700', borderRadius: 12, border: 'none', color: '#222', fontWeight: 'bold' }}>
								רכוש חבילה
							</button>
						</div>
					))}
				</div>
				<button onClick={scrollRight} style={{ fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', marginLeft: 8 }}>&#8594;</button>
			</div>
			<h2>בחר אודישן:</h2>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, margin: '30px 0' }}>
				{auditions.map((aud, i) => (
					<button
						key={i}
						onClick={() => setSelected(i)}
						style={{
							padding: 15,
							fontSize: 18,
							borderRadius: 10,
							background: '#eaf6ff',
							border: '2px solid #1976d2',
							cursor: 'pointer',
						}}
					>
						{aud.title}
					</button>
				))}
			</div>
			{selected !== null && (
				<div style={{ background: '#f9f9f9', borderRadius: 10, padding: 20, marginTop: 20 }}>
					<h2>{auditions[selected].title}</h2>
					<p>{auditions[selected].description}</p>
					<button
						style={{
							padding: '10px 20px',
							fontSize: 17,
							background: '#1976d2',
							color: '#fff',
							borderRadius: 8,
							border: 'none',
							marginTop: 10,
						}}
					>
						הגש מועמדות
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
