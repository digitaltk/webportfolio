const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Tatenda Makandigona</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://www.unsurprivisedev.co.zw/"
          >
            unsupervisedev
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/digitaltk">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/unsupervisedev">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tmakandigona/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
