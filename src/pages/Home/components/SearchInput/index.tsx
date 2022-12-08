import { useForm } from 'react-hook-form';
import { SearchInputContainer } from './styles';

interface SearchInputProps {
  articlesCount: number;
  getArticles: (q?: string) => Promise<void>;
}

type FormInputs = {
  query: string;
};

export function SearchInput({ articlesCount, getArticles }: SearchInputProps) {
  const { register, handleSubmit } = useForm<FormInputs>();

  async function handleFormSubmit(data: FormInputs) {
    await getArticles(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <h3>Publicações</h3>
        <span>
          {articlesCount === 0
            ? 'Nenhuma publicação encontrada'
            : articlesCount === 1
            ? '1 publicação'
            : `${articlesCount} publicações`}
        </span>
      </div>
      <input
        type="text"
        placeholder="Buscar publicações"
        {...register('query')}
      />
    </SearchInputContainer>
  );
}
