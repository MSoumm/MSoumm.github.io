// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Here are my publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses I thaught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-phd-defense-successfully-defended-on-december-16-2024-i-successfully-defended-my-phd-in-deep-learning-read-more-about-my-phd-work-here-my-phd-research",
          title: '🎓 PhD Defense – Successfully Defended! 🎉 On December 16, 2024, I successfully...',
          description: "",
          section: "News",},{id: "news-big-news-as-of-february-1-2025-i-have-officially-started-my-post-doc-excited-to-dive-deeper-into-disentangled-representations-generative-models-and-neuroimaging-stay-tuned-for-updates-on-my-journey",
          title: '🎉 Big News! 🎉 As of February 1, 2025, I have officially started...',
          description: "",
          section: "News",},{id: "news-new-paper-alert-thrilled-to-share-that-our-paper-saga-learning-signal-aligned-distributions-for-improved-text-to-image-generation-has-been-accepted-as-an-oral-at-aaai-2026-paper-website-https-msoumm-github-io-saga",
          title: '🔥 New Paper Alert! Thrilled to share that our paper, SAGA: Learning Signal-Aligned...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6F%75%6D%6D@%74%65%6C%65%63%6F%6D-%70%61%72%69%73.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MSoumm", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michaël-soumm", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=C1NLacwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
