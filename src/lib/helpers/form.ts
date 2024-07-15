export function setPreview(event: Event, image: HTMLImageElement) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      image.setAttribute("src", e.target?.result as string);
    };

    reader.readAsDataURL(file);

    return true;
  }

  return false;
}

export function resetFileInput(
  input: HTMLInputElement,
  image: HTMLImageElement
) {
  input.value = "";
  image.setAttribute("src", "");

  return false;
}
