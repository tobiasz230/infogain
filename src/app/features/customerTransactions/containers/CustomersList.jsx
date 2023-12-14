import useCustomers from "../hooks/useCustomers";
import UsersList from "../components/usersList/UsersList";
import { useContext, useMemo } from "react";
import { CustomerTransactionsContext } from "../context/CustomerTransactionsContext";

const CustomersList = () => {
  const { setCustomer } = useContext(CustomerTransactionsContext);
  const { customers, isLoading } = useCustomers();

  const customersList = useMemo(
    () =>
      customers.map((c) => ({
        id: c.id,
        avatar: c.avatar,
        fullName: c.fullName,
        company: c.company,
      })),
    [customers],
  );

  const handleClick = (customer) => {
    setCustomer(customer);
  };

  if (isLoading) return <span>loading...</span>;

  if (!customers.length) return <span>No customers</span>;
  return <UsersList users={customersList} onSelect={handleClick} />;
};

export default CustomersList;
