import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../services/fetchUserProfile";
import Account from "../components/Account";
import { editForm, cancelEdit } from "../store/FormSlice";
import { updateUserProfile } from "../services/userService";

const User = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const { isEditing } = useSelector((state) => state.form);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setNewFirstName(user.firstName);
      setNewLastName(user.lastName);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!user) {
    return <div>Aucun utilisateur connecté.</div>;
  }

  const handleEdit = () => {
    dispatch(editForm({ firstName: user.firstName, lastName: user.lastName }));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  const handleSave = async () => {
    const updatedFirstName = newFirstName || user.firstName;
    const updatedLastName = newLastName || user.lastName;

    try {
      dispatch(
        updateUserProfile({
          firstName: updatedFirstName,
          lastName: updatedLastName,
        })
      );
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du profil utilisateur:",
        error
      );
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>

        {isEditing ? (
          <div className="form">
            <div className="form__input-zone">
              <input
                className="form__input"
                id="firstName"
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <label htmlFor="firstName"></label>
              <input
                className="form__input"
                id="lastName"
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <label htmlFor="lastName"></label>
            </div>
            <div className="form__button-zone">
              <button className="form__button" onClick={handleSave}>
                Save
              </button>
              <button className="form__button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
};

export default User;
