// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type TTask = {
  taskTitle: string;
  taskDescription: string;
  isComplete: boolean;
};

export type TTopic = {
  title: string;
  subtitle: string;
  tasks: TTask[];
};
export type TProject = {
  projectTitle: string;
  isStarred?: boolean;
  sliderIndex: number;
  createdAt: string;
  topics: TTopic[];
};
export type TRootState = TProject[];
export type TAddTopicAction = PayloadAction<{ title: string; subtitle: string }>;
export type TAddTaskAction = PayloadAction<{ topicIndex: number; task: TTask }>;
export type TRootAction = TAddTopicAction | TAddTaskAction;
type TInitialState = {
  initialStateData: TProject[];
  completedTasksCount?: number;
};
const initialState: TInitialState = {
  completedTasksCount: 0,
  initialStateData: [
    {
      projectTitle: 'Webflow Starter',
      isStarred: true,
      sliderIndex: 0,
      createdAt: new Date().toISOString(),
      topics: [
        {
          title: 'Style Guide',
          subtitle:
            'Elevate your Webflow project with our Flow Starter, the cornerstone of every Project/Product at Flow Ninja, built upon the principles of Flow Starter.',
          tasks: [
            {
              taskTitle: 'Global Heading Tags',
              taskDescription:
                "Each HTML Tag in Flow Starter is meticulously crafted to align with the brand identity of the website we're constructing.",
              isComplete: false,
            },
            {
              taskTitle: 'Rich Text',
              taskDescription:
                'The Rich Text element boasts custom spacing and styling for a seamless integration within the design.',
              isComplete: false,
            },
            {
              taskTitle: 'Global Colors',
              taskDescription:
                'Colors are thoughtfully named, such as Neutral 100 or Blue 200, ensuring a cohesive and global color palette.',
              isComplete: false,
            },
            {
              taskTitle: 'Global Buttons',
              taskDescription:
                'All button styles and variants are documented in the Style Guide. Non-Webflow Button elements are symbolized in Flow Starter.',
              isComplete: false,
            },
            {
              taskTitle: 'Custom Inputs and Form Fields',
              taskDescription:
                "Form Elements receive a customized styling treatment to align seamlessly with the client's website branding.",
              isComplete: false,
            },
            {
              taskTitle: 'Custom Container and Grid Setup',
              taskDescription:
                'Container max width, gutter, and margins are aligned with the Figma Design specifications to ensure a pixel-perfect layout.',
              isComplete: false,
            },
            {
              taskTitle: 'Global Margin & Padding Classes',
              taskDescription:
                'Margin classes (M, L, XL) and Padding classes are updated to match the Figma design system for consistent spacing throughout the project.',
              isComplete: false,
            },
            {
              taskTitle: 'Max Width Classes',
              taskDescription:
                'After reviewing the Max Width Classes used in Development, global classes are updated to ensure harmony with the design.',
              isComplete: false,
            },
            {
              taskTitle: 'Navigation and Footer Symbols',
              taskDescription:
                'Navigation and footer are singular instances in the project. Page-specific color changes are managed through interactions. Ensure all nav and footer links have current page states and hover states.',
              isComplete: false,
            },
            {
              taskTitle: 'Fonts',
              taskDescription:
                'Custom WOFF fonts are a must for achieving the desired typography. Make sure to upload them for a consistent and branded look.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Usability & Design',
          subtitle:
            'To ensure accessibility compliance and closer adherence to designs, we follow specific steps for each Webflow Site.',
          tasks: [
            {
              taskTitle: 'Hover States',
              taskDescription:
                'Ensure all links, buttons, and clickable cards have appropriate hover states. Elements without clickability should not have hover states.',
              isComplete: false,
            },
            {
              taskTitle: 'Linking Pages',
              taskDescription:
                'Link all elements to pages within the project. Project pages should be accessible from both the footer and navigation.',
              isComplete: false,
            },
            {
              taskTitle: 'Interaction Speed',
              taskDescription:
                'Optimize interactions for a seamless user experience. When combining image and text, selectively animate either the image or text for a smooth fade-in effect.',
              isComplete: false,
            },
            {
              taskTitle: 'Interactions on Tabs, Dropdowns, and Sliders',
              taskDescription:
                'Implement custom in-view and out-of-view interactions for Dropdowns, Tabs, and Sliders to enhance user engagement.',
              isComplete: false,
            },
            {
              taskTitle: 'Navigation',
              taskDescription:
                'Ensure sticky navigation with a background on scroll. The background should distinctively contrast with the content during scroll.',
              isComplete: false,
            },
            {
              taskTitle: 'Tablet and Mobile Hover States',
              taskDescription: 'Exclude hover states for elements on Tablet and Mobile devices to enhance usability.',
              isComplete: false,
            },
            {
              taskTitle: 'Double Check Spacings',
              taskDescription:
                'Verify spacings, container sizes, font sizes, font colors, and line height in Figma before sending the project for QA.',
              isComplete: false,
            },
            {
              taskTitle: 'Missing Content',
              taskDescription: 'Document all instances where content is missing in our project management tool.',
              isComplete: false,
            },
            {
              taskTitle: 'Blurry Images',
              taskDescription:
                'Ensure images are clear on all devices. Check exports, request better images from the client, or consider disabling responsive images if needed.',
              isComplete: false,
            },
            {
              taskTitle: 'Images Height',
              taskDescription:
                'Avoid setting images to 100% height. Specify a specific height and width for each image.',
              isComplete: false,
            },
            {
              taskTitle: 'Navigation Scroll',
              taskDescription:
                'Prevent site scrolling when the navigation element is open. Use the default code provided in each Flow Starter kickoff file.',
              isComplete: false,
            },
            {
              taskTitle: 'Nav Menu Scroll',
              taskDescription:
                'Ensure navigation links are visible on all screen sizes and can be scrolled within the navigation if they exceed the screen space.',
              isComplete: false,
            },
            {
              taskTitle: 'Image + Text',
              taskDescription: 'Arrange sections with Text + Image to display the image first, followed by text.',
              isComplete: false,
            },
            {
              taskTitle: 'Horizontal Scroll',
              taskDescription: 'Eliminate horizontal scrolling on the site for a better user experience.',
              isComplete: false,
            },
            {
              taskTitle: 'Check on All Devices and Small Laptops',
              taskDescription:
                'Thoroughly inspect the site on all devices and reduce the screen size to 992 pixels to ensure optimal performance.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Search Engine Optimisation',
          subtitle:
            "Implementing a few simple strategies can enhance your site's friendliness for search engines, leading to higher rankings.",
          tasks: [
            {
              taskTitle: 'Heading 1',
              taskDescription:
                'Ensure each page contains only one Heading 1. If H1 styling is needed for a non-H1 element, create a Global Class mirroring Heading 1 properties and adjust for all breakpoints.',
              isComplete: false,
            },
            {
              taskTitle: 'Heading Structure',
              taskDescription:
                'Maintain a logical heading structure on each page, starting with H2, followed by H3, then H4. If design requires a different heading size, create a custom class.',
              isComplete: false,
            },
            {
              taskTitle: 'When Migrating - SEO Title & Description',
              taskDescription: 'For migrated sites, ensure SEO Titles and Descriptions match for each page.',
              isComplete: false,
            },
            {
              taskTitle: "When It's a New Site - SEO Title & Description",
              taskDescription:
                'Add a curated SEO Title until the client’s SEO Consultants provide one. It can be the H1 of the page or something meaningful + “ | Business Name”.',
              isComplete: false,
            },
            {
              taskTitle: 'Image Alt Texts',
              taskDescription:
                'Write Alt Texts describing images with added SEO benefit for the client, e.g., “Honey Cookies in Nis”. Alt Texts should enhance image accessibility and provide SEO value.',
              isComplete: false,
            },
            {
              taskTitle: 'Page Structure',
              taskDescription:
                'Adhere to the core page structure from Flow Starter and add proper Schematic HTML tags to all elements.',
              isComplete: false,
            },
            {
              taskTitle: 'Schema Markup',
              taskDescription:
                'Markup the homepage with Schema/JSON. Elements like FAQ should have structured JSON data. Refer to resources for details.',
              isComplete: false,
            },
            {
              taskTitle: 'Webflow Domain Indexing',
              taskDescription: 'Disable indexing for the .webflow domain.',
              isComplete: false,
            },
            {
              taskTitle: 'Website Sitemap',
              taskDescription: 'Enable the “Automatically Generate a Sitemap” feature.',
              isComplete: false,
            },
            {
              taskTitle: 'Default Domain',
              taskDescription: 'Set the .www domain as the default domain, considering Webflow SSL compatibility.',
              isComplete: false,
            },
            {
              taskTitle: 'Search Console',
              taskDescription: 'Enable the search console on the site.',
              isComplete: false,
            },
            {
              taskTitle: 'Page and CMS Slugs',
              taskDescription: "Ensure all page and CMS slugs match those of the old client's site.",
              isComplete: false,
            },
            {
              taskTitle: 'Redirects',
              taskDescription: 'Plan and organize redirects from the old site.',
              isComplete: false,
            },
            {
              taskTitle: 'Speed',
              taskDescription: 'Test and achieve a GTMetrix score of A for optimal site speed.',
              isComplete: false,
            },
            {
              taskTitle: 'Showcase our Agency',
              taskDescription: 'Include “Built with ❤️ By ideapeel” in the project Footer.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Forms',
          subtitle:
            "Forms play a crucial role in gathering leads for marketing sites. It's imperative to ensure proper connection and configuration of all forms on the site.",
          tasks: [
            {
              taskTitle: 'Input Settings',
              taskDescription:
                'Verify that all form inputs have correct settings (e.g., Email is configured as Email, Phone as Phone), and custom names are added to all form inputs.',
              isComplete: false,
            },
            {
              taskTitle: 'Form Settings',
              taskDescription: 'Ensure that all forms have custom form names added for proper identification.',
              isComplete: false,
            },
            {
              taskTitle: 'Form Success Message',
              taskDescription:
                'Design and implement a custom success message for each form, providing a positive and tailored user experience.',
              isComplete: false,
            },
            {
              taskTitle: 'Form Error Message',
              taskDescription:
                'Create a custom error message design and copy for each form, guiding users through any potential issues with clarity.',
              isComplete: false,
            },
            {
              taskTitle: 'CRM Connection',
              taskDescription:
                "Ensure forms are connected to either the client's email or their CRM of choice. Always inquire about the client's CRM before deciding to route forms to their email address.",
              isComplete: false,
            },
            {
              taskTitle: 'Custom Validation',
              taskDescription:
                'Implement custom validation from the Flow Starter kickoff file for each field. Include email, name, and phone validations, along with custom fields for those requirements.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'CMS Pages',
          subtitle:
            'Setting up the CMS properly is crucial for a successful Webflow site. Clients will love Webflow when key features are implemented, but missing these may lead them to think Webflow is broken.',
          tasks: [
            {
              taskTitle: 'CMS Slugs',
              taskDescription: 'Ensure slugs for CMS pages are singular, e.g., /blog/, /author/, /service/.',
              isComplete: false,
            },
            {
              taskTitle: 'CMS Fields',
              taskDescription:
                'Utilize the description part of CMS fields to provide clear explanations of their purpose and connections.',
              isComplete: false,
            },
            {
              taskTitle: 'Dummy CMS Content',
              taskDescription:
                'Add at least 3 CMS items with different content for each CMS. Ideally, aim for a total of 7 CMS items to showcase variety.',
              isComplete: false,
            },
            {
              taskTitle: 'CMS Connection',
              taskDescription:
                'Double-check each element on the page to ensure all images, texts, and links are properly connected to pull information from the CMS.',
              isComplete: false,
            },
            {
              taskTitle: 'Conditional Visibility',
              taskDescription:
                "Add conditional visibility for elements that might not have data filled in by the client. For example, hide the Twitter icon if the client hasn't added the Twitter link in the CMS.",
              isComplete: false,
            },
            {
              taskTitle: 'CMS Post Pages Designs',
              taskDescription:
                'Ensure all CMS post pages have content, including navigation, footer, and relevant sections. Even for FAQ CMS posts, include a question and answer section in the hero.',
              isComplete: false,
            },
            {
              taskTitle: 'Empty CMS List State',
              taskDescription:
                'Design and implement the empty state for all CMS collections, guiding the client on where to go to add CMS content.',
              isComplete: false,
            },
            {
              taskTitle: 'CMS Items Connections',
              taskDescription:
                "Check if all CMS items are connected to the proper links or post pages. For items linking out of the site, open links in a new tab and add rel='noreferrer'.",
              isComplete: false,
            },
            {
              taskTitle: 'Dynamic SEO Titles, Descriptions, and OG Images',
              taskDescription:
                "Pull the SEO Title from the Item name + ' | Business Name' or add custom fields for all three. During migrations, replicate the same SEO Titles and Descriptions as on the old site.",
              isComplete: false,
            },
            {
              taskTitle: 'CMS Sorting & Filtering',
              taskDescription:
                "Check if CMS lists are sorted properly, following the client's preference (e.g., Newest first). Ensure related CMS items don't display the current CMS item.",
              isComplete: false,
            },
            {
              taskTitle: 'CMS Switches',
              taskDescription: 'Add featured, first, or any required fields to the CMS as per the design requirements.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Symbols',
          subtitle:
            "Utilizing symbols effectively can enhance the client's experience in using the Webflow site. Performing a symbol check ensures consistency and ease of management.",
          tasks: [
            {
              taskTitle: 'Symbol Check',
              taskDescription:
                'Ensure that every repeating element on the site is converted into a symbol. Common elements like navigation, footer, and newsletter sign-up should always be symbols.',
              isComplete: false,
            },
            {
              taskTitle: 'New Page in Flow Starter',
              taskDescription:
                'Create a new page in Flow Starter and paste in all symbols used on the site. This helps maintain a centralized location for symbols and ensures consistency throughout the project.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Naming Conventions',
          subtitle:
            'Establishing consistent naming conventions contributes to a smoother client experience in using the Webflow site.',
          tasks: [
            {
              taskTitle: 'Flow Starter Classes Used',
              taskDescription:
                'Refer to Flow Starter for guidelines on naming classes. Maintain consistency in class naming for better organization.',
              isComplete: false,
            },
            {
              taskTitle: 'All Classes in Title Case',
              taskDescription:
                'Always use Title Case for class naming. Webflow automatically converts these to .title-case upon site publication, eliminating the need for hyphens in class names.',
              isComplete: false,
            },
            {
              taskTitle: 'Page Names in Title Case',
              taskDescription:
                "Ensure that all page names, such as 'Case Studies' or 'Our Work,' are consistently written in Title Case for clarity and consistency.",
              isComplete: false,
            },
            {
              taskTitle: 'Interaction Naming',
              taskDescription:
                "Follow the same logic as class naming when naming interactions. For example, 'Homepage Hero Load' or 'Testimonials Card Hover In.' Consistent and descriptive names enhance organization.",
              isComplete: false,
            },
          ],
        },

        {
          title: 'Logo',
          subtitle:
            'Ensuring the logo is properly configured enhances user experience and professionalism on the website.',
          tasks: [
            {
              taskTitle: 'Logo Link',
              taskDescription:
                'Connect the logo in the navigation and footer to the homepage for a seamless user experience.',
              isComplete: false,
            },
            {
              taskTitle: 'Logo Alt Text',
              taskDescription:
                'Assign ALT Text to the logo in the navigation and footer for accessibility and better SEO practices.',
              isComplete: false,
            },
            {
              taskTitle: 'Logo Size',
              taskDescription:
                'Ensure the logo has a fixed size and height, and ideally use an SVG format for scalability and clarity.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Project Settings',
          subtitle: 'Finalize the project with these tweaks to enhance its overall appeal.',
          tasks: [
            {
              taskTitle: 'Favicon and Web Clip',
              taskDescription:
                'Upload a custom Fav Icon and Web Clip for a unique and branded appearance in browser tabs and bookmarks.',
              isComplete: false,
            },
            {
              taskTitle: 'Language Code',
              taskDescription:
                "Add the language code in the project settings, e.g., 'en', to specify the language used in the project.",
              isComplete: false,
            },
            {
              taskTitle: 'Remove Webflow Branding',
              taskDescription:
                'Turn off Webflow branding in the code and the badge on the bottom right for a clean and professional look.',
              isComplete: false,
            },
            {
              taskTitle: 'Timezone',
              taskDescription: "Set the timezone to the client's timezone for accurate time-related functionalities.",
              isComplete: false,
            },
            {
              taskTitle: 'Advanced Publishing Options',
              taskDescription:
                'Enable SSL, Minify HTML, CSS, JS, and Use Secure Frame Headers for enhanced security and performance.',
              isComplete: false,
            },
            {
              taskTitle: 'Custom Client Branding',
              taskDescription:
                'Add the custom branding logo to the Editor tab for a personalized touch when clients access the site editor.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Tracking',
          subtitle: 'Ensure proper tracking to understand visitor behavior on the site.',
          tasks: [
            {
              taskTitle: 'GTM Set Up',
              taskDescription:
                'Ask the client to provide a GTM tracking code and access to your email address for GTM. Add the GTM tracking code to the head of the page; the body component is not necessary as it is triggered only when users have JS disabled. All tracking scripts for the site must be managed within GTM. Minimize the number of scripts outside of GTM to ensure efficient tracking.',
              isComplete: false,
            },
          ],
        },

        {
          title: 'Final Check',
          subtitle: 'Perform a thorough check on different browsers to ensure a smooth and consistent user experience.',
          tasks: [
            {
              taskTitle: 'Google Chrome',
              taskDescription:
                'Check all pages using Google Chrome to identify and address any issues specific to this browser.',
              isComplete: false,
            },
            {
              taskTitle: 'Safari',
              taskDescription:
                'Check all pages using Safari to identify and address any issues specific to this browser.',
              isComplete: false,
            },
            {
              taskTitle: 'Firefox',
              taskDescription:
                'Check all pages using Firefox to identify and address any issues specific to this browser.',
              isComplete: false,
            },
          ],
        },
      ],
    },
  ],
};
const updateTasksCompletion = (topics: TTopic[], topicTitle: string, isComplete: boolean): TTopic[] => {
  return topics.map((topic: TTopic) => {
    if (topic.title === topicTitle) {
      const updatedTasks = topic.tasks.map(task => {
        return { ...task, isComplete };
      });
      return { ...topic, tasks: updatedTasks };
    }
    return topic;
  });
};
// to store at local storage
const storeToLocalStorage = data => {
  localStorage.setItem('rootTasks', JSON.stringify(data));
};
const rootTasksSlice = createSlice({
  name: 'rootTasksSlice',
  initialState,
  reducers: {
    addNewProject: (state, action: PayloadAction<{ projectName: string; createdAt: string }>) => {
      const { projectName, createdAt } = action.payload;
      const initialTopics = state.initialStateData[0].topics;
      const newProject = { projectTitle: projectName, createdAt, sliderIndex: 0, topics: initialTopics };
      state.initialStateData.push(newProject);
      storeToLocalStorage(state.initialStateData);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ projectName: string; topicTitle: string; taskTitle: string; isComplete: boolean }>,
    ) => {
      const { projectName, topicTitle, taskTitle, isComplete } = action.payload;
      state.initialStateData = state.initialStateData.map((project: TProject) => {
        if (project.projectTitle === projectName) {
          project.topics = project.topics.map((topic: TTopic) => {
            if (topic.title === topicTitle) {
              topic.tasks = topic.tasks.map(task => {
                if (task.taskTitle === taskTitle) {
                  return { ...task, isComplete: !isComplete };
                }
                return task;
              });
            }
            return topic;
          });
        }
        return project;
      });
      // state.initialStateData = state.initialStateData.tasks.map(topic => {
      //   if (topic.title === topicTitle) {
      //     // Find the task by name within the topic's tasks
      //     const updatedTasks = topic.tasks.map(task => {
      //       if (task.taskTitle === taskTitle) {
      //         // Update the isCompleted status
      //         return { ...task, isComplete: !isComplete };
      //       }
      //       return task;
      //     });

      //     // Update the tasks array for the topic
      //     return { ...topic, tasks: updatedTasks };
      //   }
      //   return topic;
      // });
      storeToLocalStorage(state.initialStateData);
    },
    markAllAsComplete: (state, action: PayloadAction<{ projectName: string; topicTitle: string }>) => {
      const { projectName, topicTitle } = action.payload;
      state.initialStateData = state.initialStateData.map((project: TProject) => {
        if (project.projectTitle === projectName) {
          project.topics = updateTasksCompletion(project.topics, topicTitle, true);
        }
        return project;
      });
      storeToLocalStorage(state.initialStateData);
    },
    markAllAsIncomplete: (state, action: PayloadAction<{ projectName: string; topicTitle: string }>) => {
      const { projectName, topicTitle } = action.payload;
      state.initialStateData = state.initialStateData.map((project: TProject) => {
        if (project.projectTitle === projectName) {
          project.topics = updateTasksCompletion(project.topics, topicTitle, false);
        }
        return project;
      });
      storeToLocalStorage(state.initialStateData);
    },
    toggleStarred: (state, action: PayloadAction<{ projectTitle: string }>) => {
      const { projectTitle } = action.payload;
      state.initialStateData = state.initialStateData.map((project: TProject) => {
        if (project.projectTitle === projectTitle) {
          return { ...project, isStarred: !project.isStarred };
        }
        return project;
      });
      storeToLocalStorage(state.initialStateData);
    },
    deleteProject: (state, action: PayloadAction<{ projectTitle: string }>) => {
      const { projectTitle } = action.payload;
      state.initialStateData = state.initialStateData.filter(project => project.projectTitle !== projectTitle);
      storeToLocalStorage(state.initialStateData);
    },
    loadDataFromLocalStorage: state => {
      const localStorageData = localStorage.getItem('rootTasks');
      if (localStorageData) {
        state.initialStateData = JSON.parse(localStorageData);
      }
    },
    removeFromLocalStorage: state => {
      state.initialStateData = [state.initialStateData[0]];
      localStorage.removeItem('rootTasks');
    },
    completedTasksCount: (state, action: PayloadAction<{ projectName: string }>) => {
      let count = 0;
      const { projectName } = action.payload;
      state.initialStateData.forEach(project => {
        if (project.projectTitle === projectName) {
          project.topics.forEach(topic => {
            topic.tasks.forEach(task => {
              if (task.isComplete) {
                count++;
              }
            });
          });
        }
      });
      // state.initialStateData.forEach(category => {
      //   category.tasks.forEach(task => {
      //     if (task.isComplete) {
      //       count++;
      //     }
      //   });
      // });
      return { ...state, completedTasksCount: count };
    },
    setSliderIndex: (state, action: PayloadAction<{ projectTitle: string; sliderIndex: number }>) => {
      const { projectTitle, sliderIndex } = action.payload;
      state.initialStateData = state.initialStateData.map(project => {
        if (project.projectTitle === projectTitle) {
          return { ...project, sliderIndex };
        }
        return project;
      });
      storeToLocalStorage(state.initialStateData);
    },
  },
});

export const {
  addNewProject,
  toggleComplete,
  markAllAsComplete,
  markAllAsIncomplete,
  deleteProject,
  loadDataFromLocalStorage,
  completedTasksCount,
  toggleStarred,
  removeFromLocalStorage,
  setSliderIndex,
} = rootTasksSlice.actions;
export default rootTasksSlice.reducer;
