export function goToHome(navigate) {
  navigate("/");
}

export function goToMovieDetails(navigate, id) {
  navigate(`/movie/${id}`);
}
