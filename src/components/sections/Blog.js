import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">paid advertising</span>
                <span className="title">
                Mastering Programmatic Ads Management: Unleashing the Power of Automation
                </span>
                <p>
                In today's digital era, where data-driven decision-making is paramount, programmatic advertising has emerged as a game-changer for marketers.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>16 May 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>7 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">development</span>
                <span className="title">
                Digital Marketing & Cyber Security
                </span>
                <p>
                In the digital age, businesses of all sizes are embracing digital marketing strategies to promote their products
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>April 24, 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">essentials</span>
                <span className="title">
                Analytics: How I Use Data to Drive Success
                </span>
                <p>
                Data analytics has become an invaluable asset for businesses looking to maximize their potential and drive success in their 
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>February 22, 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
