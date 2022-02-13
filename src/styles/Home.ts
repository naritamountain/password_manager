import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 0 2rem;
  }

  .main {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 4rem 0;
    .footer {
      align-items: center;
      border-top: 1px solid #eaeaea;
      display: flex;
      flex: 1;
      justify-content: center;
      padding: 2rem 0;
    }
  }

  .footer a {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    font-size: 4rem;
    line-height: 1.15;
    margin: 0;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 4rem 0;
  }

  .code {
    background: #fafafa;
    border-radius: 5px;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
    font-size: 1.1rem;
    padding: 0.75rem;
  }

  .grid {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
  }

  .card {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    color: inherit;
    margin: 1rem;
    max-width: 300px;
    padding: 1.5rem;
    text-align: left;
    text-decoration: none;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    border-color: #0070f3;
    color: #0070f3;
  }

  .card h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  .card p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .grid {
      flex-direction: column;
      width: 100%;
    }
  }
`
