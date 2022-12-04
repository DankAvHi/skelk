type InputProps = UIComponentProps &
     React.HTMLProps<HTMLInputElement> & { withButton: false; containerClassName?: string };

type InputWithButtonProps = UIComponentProps &
     React.HTMLProps<HTMLInputElement> & {
          withButton?: true;
          containerClassName?: string;
          buttonClassName?: string;
          buttonText?: string;
          buttonImage?: string;
          buttonOnClick?: React.HTMLProps<HTMLButtonElement>["onClick"];
     };
