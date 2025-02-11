const Footer: React.FC = () => {
	return (
		<footer className="footer py-4" style={{ background: "#eee" }}>
			<div className="container">
				<div className="d-flex align-items-center justify-content-center w-100">
					<div className="d-flex justify-content-center color-white col-lg-8 text-lg-start text-end">
						Copyright &copy; {process.env.SITE_URL} {new Date().getFullYear()}
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
