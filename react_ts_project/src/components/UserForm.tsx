import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormWrapper title="Informações do Usuário">
        <label>Primeiro Nome</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Ultimo Nome</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <label>Idade</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}
