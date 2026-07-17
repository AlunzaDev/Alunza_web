export function SceneBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_47%,rgba(0,83,181,0.11),transparent_18%),linear-gradient(180deg,#ffffff_0%,#ffffff_66%,#eef6ff_100%)]"
      />
      <div
        aria-hidden="true"
        className="alunza-horizon pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[24vh] min-h-32 overflow-hidden"
      />
    </>
  )
}
