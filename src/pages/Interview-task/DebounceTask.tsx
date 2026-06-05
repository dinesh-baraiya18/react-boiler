import { useEffect, useState } from "react"
import { useDebounce } from "../../hooks/common/useDebounce";

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "watermelon",
  "pineapple",
  "strawberry",
  "blueberry",
  "kiwi",
  "mango",
  "peach",
  "pear",
  "plum",
  "raspberry",
  "blackberry",
  "coconut",
  "avocado",
  "papaya",
  "fig",
  "pomegranate",
  "grapefruit",
  "melon",
  "lychee",
  "passionfruit",
  "dragonfruit",
  "guava",
  "persimmon",
  "tangerine",
  "cantaloupe",
  "honeydew",
]

const DebounceTask = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [input, setInput] = useState<string>("")
  const [selectedFruit, setSelectedFruit] = useState("")

  const debouncedSearchTerm = useDebounce(input, 500);

  const updateSuggestions = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    const recommendedFruits = fruits.filter(fruit =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(recommendedFruits)
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      updateSuggestions(debouncedSearchTerm);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleFruitClick = (fruit: string) => {
    setSelectedFruit(fruit)
    setInput("");
    setSuggestions([])
  }

  return (
    <div className="max-w-80">
      <input
        type="text"
        placeholder="Search for fruits..."
        value={input}
        onChange={handleInputChange}
        className="w-full mb-5"
      />
      {
        suggestions?.length > 0 && (
          <ul className="bg-gray-200 p-2 rounded-xl shadow-2xl border border-gray-100 max-h-50 overflow-y-auto">
            {suggestions.map((fruit) => (
              <li
                key={fruit}
                className="cursor-pointer hover:bg-white p-2 text-[14px] rounded-xl"
                onClick={() => handleFruitClick(fruit)}
              >{fruit}</li>
            ))}
          </ul>
        )
      }
      <br />
      <br />
      {selectedFruit && (
        <div className="text-[32px]">
          selected Fruit : {selectedFruit}
        </div>
      )}
    </div>
  )
}

export default DebounceTask