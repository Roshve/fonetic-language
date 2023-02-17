import React from "react";

const About = () => {
  return (
    <>
      <h1>🗺️Routing</h1>
      <h4>Ideas/conceptos claves</h4>
      <p>Rutas Estáticas: Son las que son sencillas

        Rutas Dinámicas: Son aquellas que se generan de una forma consecutiva dependiendo de variables
      </p>
      <h4>Apuntes</h4>
      <p>
        Todo lo que esta relacionado con paginas y navegación se entiende con el nombre de routing. En Next.js ya cuenta con una solución para no preocuparnos del tema. Cuenta con dos soluciones:
      </p>

      <ul>
        <li>
          <strong>Rutas Estáticas:</strong> /about/
        </li>
        <li>
          <strong>Rutas Dinámicas:</strong> /user/platzi
        </li>
      </ul>
      <p>
        Si se quiere hacer rutas dinámicas con parámetros, nombramos el archivo de esta forma:
      </p>
      <code>[parametro].js</code>
      <p>
        para leer el parámetro se puede usar el hook de Next.js
      </p>

      <pre>
        {`
            import {useRouter} from "next/router";

            const ProductItem = () => {
            const {
                      query: {productId},
            } = useRouter();
                    return <div>Esta es la página del producto: {productId}</div>;
            };

            export default ProductItem;
          `}
      </pre>

      <p> Los cambios que ejecutamos vienen con Hot Reload y fast refresh. Es decir que se aplican rápidamente en en el navegador.</p>

      <p>Cada vez que creamos un archivo en pages se agregan a las rutas de la aplicación. Esta manera de hacer rutas se denomina routing basado en file system</p>

      <p>
        <strong>RESUMEN:</strong> Crear rutas en Next.js es bastante sencillo debido a que usa routing basado en file system
      </p>
    </>)
}

export default About;