export function TextLimit({ text, limit, as: Component = "p" }) {
    const formattedText = Array.isArray(text) ? text.join(', ') : text;

    const textLimited = formattedText.length > limit ? `${formattedText.substring(0, limit)}...` : formattedText;

    console.log('Texto:', formattedText);
    console.log('Texto limitado:', textLimited);
    console.log('Limite:', limit);

    return <Component>{textLimited}</Component>;
  }