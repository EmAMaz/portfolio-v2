type Props = {
    imgUrl: string;
    titulo: string;
    urlRef: string;
};

export default function CardSkills({imgUrl, titulo, urlRef}: Props) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={urlRef} >
      <div className="sm:scale-90 sm:foundation_card__v7VKB transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <p className="font-bold text-black/80 hidden sm:block">{titulo}</p>
      </div>
    </a>
  );
}
