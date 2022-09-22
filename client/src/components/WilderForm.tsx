import { useState, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { createWilder } from "../services/wilders";
import { IwilderInput } from "../types/Iwilder";

interface WilderFormProps {
  loadWildersIntoState: () => void
}


export default function WilderForm({ loadWildersIntoState}: WilderFormProps) {
  const [name, setName] = useState<IwilderInput['name']>("");
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    try {
      await createWilder({ name });
      loadWildersIntoState();
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
      navigate('/wilders');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nom :{" "}
        <input
          type="text"
          id="name"
          disabled={processing}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <button type="submit" disabled={processing}>
        Ajouter
      </button>
      <br />
      <br />
    </form>
  );
}
