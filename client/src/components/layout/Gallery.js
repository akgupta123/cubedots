import React from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";

const photos = [
  {
    src: "https://media1.giphy.com/media/Rz5wxqZVhRxoA/200w.webp",
    width: 3,
    height: 2
  },
  {
    src: "https://media1.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif",
    width: 1,
    height: 1
  },

  {
    src: "https://media2.giphy.com/media/vB7WSUfplJahO/200.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://media2.giphy.com/media/4xr0eyD4NBjeE/giphy.webp",
    width: 1,
    height: 1
  },
  {
    src:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    width: 4,
    height: 3
  },
  {
    src: "https://media2.giphy.com/media/mlvseq9yvZhba/giphy.webp",
    width: 3,
    height: 4
  },
  {
    src: "https://media1.giphy.com/media/zFFmShxwdztp6/100.webp",
    width: 2,
    height: 1
  },
  {
    src: "https://media3.giphy.com/media/LeoQs1lygBc1W/giphy.gif",
    width: 2,
    height: 1
  },
  {
    src:
      "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    width: 4,
    height: 3
  }
];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.state = { currentImage: 0 };
 
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  render() {
    const width = this.state.width;
    return (
      <Measure
        bounds
        onResize={contentRect =>
          this.setState({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          if (width >= 1824) {
            columns = 4;
          }
          return (
            <div ref={measureRef} style={{ height: 500, overflow: "scroll" }}>
              <Gallery
                photos={photos}
                columns={columns}
                onClick={this.openLightbox}
              />
           
            </div>
          );
        }}
      </Measure>
    );
  }
}
export default ImageGallery;
