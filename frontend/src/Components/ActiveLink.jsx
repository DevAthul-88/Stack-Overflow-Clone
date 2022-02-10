import {Link , useRoute} from 'wouter'

const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "is-active" : ""}>{props.children}</a>
      </Link>
    );
  };
  
export default ActiveLink  