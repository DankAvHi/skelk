type ButtonProps = UIComponentProps &
     React.HTMLProps<HTMLButtonElement> & {
          type?: "button";
     };

type AnchorProps = UIComponentProps &
     React.HTMLProps<HTMLAnchorElement> & {
          type: "link";
          external?: boolean;
     };
