<template>
  <div class="page page-home">
    <h3 class="title title-greeting">PartyX</h3>
    <h3 class="title title-user">Admin User</h3>
    <template v-if="hasUserSectionPermissions">
      <div class="text-subtitle2 section-name">Links to pages</div>
      <div class="container">
        <template v-if="hasAgentPermissions">
          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">person icon</div>
              <div class="title">home create application</div>
            </div>
          </div>

          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">snooze icon</div>
              <div class="title">home saved app</div>
            </div>
          </div>
        </template>

        <template v-if="hasAdvisorPermissions">
          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">man icon</div>
              <div class="title">home meeting today</div>
            </div>
          </div>

          <div class="home-card" :to="{}" v-if="bidsMockEnabled">
            <div class="box">
              <div class="icon">assignment icon</div>
              <div class="title">home mock bids</div>
            </div>
          </div>
        </template>

        <template v-if="hasCustomerServicePermission">
          <div class="home-card" tag="a" href="" target="_blanc">
            <div class="box">
              <div class="icon">phone icon</div>
              <div class="title">customer service</div>
            </div>
          </div>
        </template>

        <template v-if="hasMeetingUserPermission">
          <div class="home-card" tag="a" href="" target="_blanc">
            <div class="box">
              <div class="icon">girl icon</div>
              <div class="title">meeting management</div>
            </div>
          </div>
        </template>

        <div class="home-card" tag="a" href="" target="_blanc">
          <div class="box">
            <div class="icon">source icon</div>

            <div class="title">home sales templates</div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="hasCoachPermissions || hasPartnerAdminPermissions">
      <div class="text-subtitle2 section-name">Partner</div>
      <div class="container">
        <template v-if="hasAgentPermissions">
          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">person icon</div>
              <div class="title">home create application</div>
            </div>
          </div>

          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">snooze icon</div>
              <div class="title">home saved app</div>
            </div>
          </div>
        </template>

        <template v-if="hasAdvisorPermissions">
          <div class="home-card" :to="{}">
            <div class="box">
              <div class="icon">man icon</div>
              <div class="title">home meeting today</div>
            </div>
          </div>

          <div class="home-card" :to="{}" v-if="bidsMockEnabled">
            <div class="box">
              <div class="icon">assignment icon</div>
              <div class="title">home mock bids</div>
            </div>
          </div>
        </template>

        <template v-if="hasCustomerServicePermission">
          <div class="home-card" tag="a" href="" target="_blanc">
            <div class="box">
              <div class="icon">phone icon</div>
              <div class="title">customer service</div>
            </div>
          </div>
        </template>

        <div class="home-card" tag="a" href="" target="_blanc">
          <div class="box">
            <div class="icon">source icon</div>
            <div class="title">home sales templates</div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="hasAdminPermissions">
      <div class="text-subtitle2 section-name">Admin</div>
      <div class="container">
        <div class="home-card" :to="{}">
          <div class="box">
            <div class="icon">person icon</div>
            <div class="title">home create application</div>
          </div>
        </div>

        <div class="home-card" :to="{}">
          <div class="box">
            <div class="icon">snooze icon</div>
            <div class="title">home saved app</div>
          </div>
        </div>

        <div class="home-card" :to="{}">
          <div class="box">
            <div class="icon">man icon</div>
            <div class="title">home meeting today</div>
          </div>
        </div>

        <div class="home-card" :to="{}" v-if="bidsMockEnabled">
          <div class="box">
            <div class="icon">assignment icon</div>
            <div class="title">home mock bids</div>
          </div>
        </div>

        <div class="home-card" tag="a" href="" target="_blanc">
          <div class="box">
            <div class="icon">phone icon</div>
            <div class="title">customer service</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "StartPage",
    setup() {
      return {
        hasUserSectionPermissions: true,
        hasAgentPermissions: true,
        hasAdvisorPermissions: true,
        bidsMockEnabled: true,
        hasCustomerServicePermission: true,
        hasMeetingUserPermission: true,
        hasCoachPermissions: true,
        hasPartnerAdminPermissions: true,
        hasAdminPermissions: true,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
    background-color: #f5f5f5;
    font-family: "Arial", sans-serif;

    .title {
      color: #333;
      margin-bottom: 20px;

      &.title-greeting {
        font-size: 28px;
      }

      &.title-user {
        font-size: 20px;
        color: #555;
      }
    }

    .section-name {
      font-size: 18px;
      color: #444;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .container {
      display: flex;
      flex-wrap: wrap;

      .home-card {
        border-radius: 5px;
        width: calc(33.33% - 20px);
        margin: 10px;
        background-color: #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        text-decoration: none;

        &:hover {
          transform: translateY(-5px);
        }

        .box {
          padding: 20px;
          height: 100px;

          .icon {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .title {
            font-size: 16px;
            color: #666;
          }
        }
      }
    }
  }
</style>
