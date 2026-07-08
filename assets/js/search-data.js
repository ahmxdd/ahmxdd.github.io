// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "more info on my google scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-07-08-theRoadAheadResiliency/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-07-08-adviceOnbuildingFronterLab/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-07-08-Sam-Altman/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-07-08-JensenHuang/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-07-08-AmandaAIEthics/";
          
        },
      },{id: "post-the-ai-native-company-y-combinator-cs153-s2026",
        
          title: "The AI Native company (Y Combinator) (CS153 S2026)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/TheAINAtiveCompany/";
          
        },
      },{id: "post-the-discipline-of-delivering-value-per-gigawatt-amin-vadhat-cs153-s2026",
        
          title: "The Discipline of Delivering Value per Gigawatt (Amin Vadhat) (CS153 S2026)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/AminVadhat-copy/";
          
        },
      },{id: "post-ben-horowitz-a16z-venture-capital-systems-network-effects-and-culture-systems-in-ai-cs153-s2026",
        
          title: "Ben horowitz (a16z), venture capital systems, network effects, and culture systems in AI...",
        
        description: "Ben horowitz is a founder and experienced CEO of a16z, a VC firm",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/a16z/";
          
        },
      },{id: "post-energy-bottlenecks-scott-nolan-from-general-matter-cs153-s2026",
        
          title: "Energy bottlenecks (Scott Nolan from General Matter) (CS153 S2026)",
        
        description: "How General Matter is filling the missing step from USA&#39;s nuclear energy processing pipeline",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/energybottlenecksScottGeneralMatter/";
          
        },
      },{id: "post-unified-intelligence-systems-amit-jain-luma-cs153-s2026",
        
          title: "Unified intelligence systems - Amit jain luma (CS153 S2026)",
        
        description: "Andreas talks about visual systems, and his experience from his tiny lab to how his startup is doing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/amitjainLuma-copy/";
          
        },
      },{id: "post-product-management-in-the-ai-era-n-singhal-from-skip-cs153-s2026",
        
          title: "Product management in the AI era (n. singhal from skip) (CS153 S2026)",
        
        description: "We talk about the future of the role of product management, as they become so much more productive with AI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/SkipProductmanagement/";
          
        },
      },{id: "post-visual-intelligence-systems-by-andreas-blattman-cs153-s2026",
        
          title: "Visual intelligence systems (by andreas blattman) (CS153 S2026)",
        
        description: "Andreas talks about visual systems, and his experience from his tiny lab to how his startup is doing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/andreasblackforestcs153/";
          
        },
      },{id: "post-elevenlabs-mati-staniszewski-on-audio-ai-cs153-s2026",
        
          title: "ElevenLabs Mati Staniszewski on Audio AI (CS153 S2026)",
        
        description: "Mati describes the state of audio AI in 2026, his pathway, and what the company is doing in the future.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/elevenlabscs153/";
          
        },
      },{id: "post-cs153-frontier-systems-summer-2026-lecture-1-notes",
        
          title: "CS153 Frontier Systems Summer 2026 Lecture 1 notes",
        
        description: "i watched all the lectures from CS153 but totally forgot everything. ill consolidate my notes here.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cs153lessons/";
          
        },
      },{id: "post-exploring-39-the-bitter-lesson-39-by-richard-sutton-2019",
        
          title: "exploring &#39;the bitter lesson&#39; by richard sutton (2019)",
        
        description: "just saw a tweet saying i should read this, and it was a little dense in writing. so i rewrote the main points here.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/my-first-post-copy/";
          
        },
      },{id: "post-my-notes-on-the-nature-of-the-firm-ronald-coase-1937",
        
          title: "my notes on the nature of the firm (ronald coase 1937)",
        
        description: "the nature of the firm is really popular but was too hard for me to read. here is a digestible version with some of my thoughts",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/my-first-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-ll-be-going-to-the-cvis-conference-on-dec-15-16",
          title: 'I’ll be going to the CVIS Conference on Dec 15-16!',
          description: "",
          section: "News",},{id: "news-you-can-change-this-for-later",
          title: 'You can change this for later!',
          description: "",
          section: "News",},{id: "news-you-can-change-this-for-later-too",
          title: 'You can change this for later too!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%31%34%61%6C%69@%74%6F%72%6F%6E%74%6F%6D%75.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ahmxdd", "_blank");
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
