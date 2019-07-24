export default {
  name: 'vui-slider',
  data() {
    return {
      show: true
    };
  },
  props: {
    size: {
      type: Number,
      default: 10
    }
  },
  methods: {
    getName(e) {
      console.log(this, e);
    }
  },
  
  render() {
    return (
      <div onClick={this.getName}>
        {[1, 2, 3, 4, 5].map(item => {
          return <span>{item}</span>;
        })}
        {this.show && (
          <span>
            <span>
              <span>{this.show}</span>
            </span>
          </span>
        )}
      </div>
    );
  }
};
