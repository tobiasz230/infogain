import useCustomers from "../../../../hooks/customer/useCustomers";
import UsersList from "../../components/usersList/UsersList";

const CustomersList = ({ onSelect }) => {
  const { customers, isLoading } = useCustomers();

  const handleClick = (customer) => {
    onSelect(customer);
  };

  if (isLoading) return <span>loading...</span>;

  if (!customers.length) return <span>No customers</span>

  const customersList = customers.map(c => ({id: c.id, avatar: c.avatar, fullName: c.fullName, company: c.company}))
  return <UsersList users={customersList} onSelect={handleClick} />;
};

export default CustomersList;
