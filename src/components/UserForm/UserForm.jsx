import { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <section className="user-form-section">
      <div className="user-form-card">
        <h2>Форма користувача</h2>
        <p>Введені дані автоматично відображаються під формою.</p>

        <form className="user-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Ім'я
            <input
              type="text"
              name="name"
              placeholder="Введіть ім'я"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Прізвище
            <input
              type="text"
              name="surname"
              placeholder="Введіть прізвище"
              value={formData.surname}
              onChange={handleChange}
            />
          </label>

          <label>
            Код групи
            <input
              type="text"
              name="groupCode"
              placeholder="Наприклад, ІПЗ-21"
              value={formData.groupCode}
              onChange={handleChange}
            />
          </label>

          <label>
            Електронна пошта
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </form>

        <div className="user-form-output">
          <h3>Введені дані</h3>
          <ul>
            <li><strong>Ім'я:</strong> {formData.name || '—'}</li>
            <li><strong>Прізвище:</strong> {formData.surname || '—'}</li>
            <li><strong>Код групи:</strong> {formData.groupCode || '—'}</li>
            <li><strong>Електронна пошта:</strong> {formData.email || '—'}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
