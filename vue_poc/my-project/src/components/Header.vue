<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a>Stock Trader</a>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a>Portfolio</a></li>
                    <li><a>Stocks</a></li>
                </ul>
                <strong class="navbar-text navbar-right">Funds: $100</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  }
};
</script>