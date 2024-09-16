import type { Meta, StoryObj } from "@storybook/html";

function getToolIcon(args, iconName, tooltip) {
  if (args.icons && args.icons.includes(tooltip)) {
    return `<li class='ul-visibility -on -off-desktop'>
          <a href="#" class='ul-application-header__link' aria-label='${tooltip}'>
            <div>
              <i class="ul-icon material-icons">${iconName}</i>
              <span class="ul-tooltip -bottom">${tooltip}</span>
            </div>
          </a>
        </li>`;
  }
  return "";
}

const startContainer = (args) =>
  args.centered ? `<div class="ul-grid__container">` : "";
const endContainer = (args) => (args.centered ? `</div>` : "");
const userArgs = {
  Size: " -medium",
  Colour: "Red",
  Features: "None",
  "Show Badge": false,
  Initials: "UL",
};

const meta = {
  title: "Components/Ul-Header",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => {
    return `<header class="ul-application-header ${args.theme}" id='topbar' role='navigation' aria-label='Global navigation'>
    ${startContainer(args)}     
    <div class="ul-application-header__left">
      <div class='ul-application-header__logo'></div>
        <a href="#" class='ul-application-header__app_menu' aria-label='Application switcher'>
          <i class="ul-icon material-icons">apps</i>
          <span class="ul-tooltip -bottom">Other Applications</span>
        </a>
        <h1 class="ul-application-header__appname"><a href="#">Product Name</a></h1>
      </div>
      <div class="ul-application-header__right">
        <ul>
          ${getToolIcon(args, "shopping_cart", "Shopping Cart")}
          ${getToolIcon(args, "comment", "Comment")}
          ${getToolIcon(args, "notifications", "Notifications")}
          <li class='ul-visibility -off -on-tablet' aria-label='Menu'>
            <a href='#' class='ul-application-header__link'>
              <div>
                <i class="ul-icon material-icons">menu</i>
              </div>
            </a>
          </li>
        </ul>
        <a class='ul-application-header__avatar' href="#">
          <div class='ul-avatar -medium -red'>UL</div>
        </a>
      </div>
      ${endContainer(args)}
  </header>`;
  },
  argTypes: {
    theme: {
      control: {
        type: "inline-radio",
        labels: { "": "", uls: "UL Solutions", ultrus: "Ultrus" },
      },
      options: ["uls", "ultrus"],
    },
    icons: {
      control: {
        type: "check",
      },
      options: ["Shopping Cart", "Comment", "Notifications"],
    },
    centered: { control: { type: "boolean", labels: { "": "" } } },
  },
  args: {
    theme: "uls",
    centered: false,
    icons: ["Comment", "Notifications"],
  },
} satisfies Meta<{
  theme: string;
  centered: boolean;
  icons: string[];
}>;

export default meta;
type Story = StoryObj<{
  theme: string;
  centered: boolean;
  icons: string[];
}>;

export const UlHeader: Story = {
  args: {
    theme: "uls",
  },
};
