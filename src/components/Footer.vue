<script setup>

</script>

<template>
    <div class="footer">
        <div id="PoweredBy"  class="mp" >
            &nbsp<a href="http://www.csu.edu.cn" style="color: white"><b class="mp addre">www.csu.edu.cn</b></a>
        </div>

        <div id="Banner"  class="mp">
            <p>1312</p>
            <!-- <c:if test="${sessionScope.loginAccount != null }">

                    <c:if test="${sessionScope.loginAccount.bannerOption == true}">
                        ${sessionScope.loginAccount.bannerName}
                    </c:if>
            </c:if> -->

        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 95vw;
    background-color: #545c64;
    height: 84px;
}
</style>