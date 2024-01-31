function calculateEmojis(minutes, emojiType) {
  const numEmojis = Math.ceil(minutes / (emojiType === 'coffee' ? 5 : 10));
  const emoji = emojiType === 'coffee' ? '☕️' : '🍱';
  return emoji.repeat(numEmojis);
}

export { calculateEmojis };
