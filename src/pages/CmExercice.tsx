import { useCallback, useMemo, useState } from "react";

type Props = {
  titles: string[];
};

export const CME = ({ titles }: Props) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const TextList = useMemo(() => {
    return titles.map((text, index) => ({
      id: index,
      text: text,
      isFavorite: favorites.includes(index),
    }));
  }, [titles, favorites]);

  const toggleFavorite = useCallback(
    (index: number) => {
      setFavorites((prevFavorites) => {
        if (prevFavorites.includes(index)) {
          return prevFavorites.filter((favIndex) => favIndex !== index);
        } else {
          return [...prevFavorites, index];
        }
      });
    },
    [setFavorites]
  );

  const favoriteCount = useMemo(() => {
    return TextList.filter((image) => image.isFavorite).length;
  }, [TextList]);

  return (
    <div>
      <p>Total favorites: {favoriteCount}</p>
      {TextList.map((element, index) => (
        <div key={element.id}>
          <h1>{element.text}</h1>
          <button onClick={() => toggleFavorite(index)}>
            {element.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};
