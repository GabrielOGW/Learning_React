import FormWrapper from "./FormWrapper";
type AddressForm = {
  street: string;
  city: string;
  state: string;
  cep: string;
};

type UserFormProps = AddressForm & {
  updateFields: (fields: Partial<AddressForm>) => void;
};
export default function AddressForm({
  street,
  city,
  state,
  cep,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormWrapper title="Endereço">
        <label>Rua</label>
        <input
          autoFocus
          required
          type="text"
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
        <label>Cidade</label>
        <input
          required
          type="text"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
        <label>Estado</label>
        <input
          required
          type="text"
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
        <label>CEP</label>
        <input
          required
          type="text"
          value={cep}
          onChange={(e) => updateFields({ cep: e.target.value })}
        />
      </FormWrapper>
    </>
  );
}
